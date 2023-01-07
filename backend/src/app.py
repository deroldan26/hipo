from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app=Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://diyo:davix1026@localhost/hipoflaskdb'
db=SQLAlchemy(app)
CORS(app) #prevent cors error

class Usuario(db.Model):
    nombre_usuario = db.Column(db.String(20), primary_key=True)
    contrasena_usuario = db.Column(db.String(20), nullable=False)

    def __repr__(self):
        return f"Event: {self.nombre_usuario}"

    def __init__(self, nombre_usuario, contrasena_usuario):
        self.nombre_usuario = nombre_usuario
        self.contrasena_usuario = contrasena_usuario

def format_usuario(usuario):
    return{
        "nombre_usuario": usuario.nombre_usuario,
        "contrasena_usuario": usuario.contrasena_usuario
    }

@app.route('/usuario', methods = ['POST'])
def create_usuario():
    nombre_usuario = request.json['nombre_usuario']
    contrasena_usuario = request.json['contrasena_usuario']
    usuario = Usuario(nombre_usuario, contrasena_usuario)
    db.session.add(usuario)
    db.session.commit()
    return format_usuario(usuario)

@app.route('/usuario', methods = ['GET'])
def get_usuarios():
    usuarios = Usuario.query.order_by(Usuario.nombre_usuario.asc()).all()
    usuario_lista = []
    for usuario in usuarios:
        usuario_lista.append(format_usuario(usuario))
    return {'usuarios': usuario_lista}

@app.route('/usuario/<nombre_usuario>', methods = ['GET'])
def get_usuario(nombre_usuario):
    usuario = Usuario.query.filter_by(nombre_usuario=nombre_usuario).one()
    formatted_usuario = format_usuario(usuario)
    return {'usuario': formatted_usuario}

@app.route('/usuario/<nombre_usuario>', methods = ['DELETE'])
def delete_usuario(nombre_usuario):
    usuario= Usuario.query.filter_by(nombre_usuario=nombre_usuario).one()
    db.session.delete(usuario)
    db.session.commit()
    return 'Usuario (nombre_usuario: {nombre_usuario}) eliminado!'

@app.route('/usuario/<nombre_usuario>', methods = ['PUT'])
def update_event(nombre_usuario):
    usuario = Usuario.query.filter_by(nombre_usuario=nombre_usuario)
    contrasena_usuario = request.json['contrasena_usuario']
    usuario.update(dict(contrasena_usuario=contrasena_usuario))
    db.session.commit()
    return {'usuario': format_usuario(usuario.one())}

def page_not_found(error):
    return "<h1>Page not found</h1>", 404

if __name__ == '__main__':
    app.register_error_handler(404, page_not_found)
    app.run()