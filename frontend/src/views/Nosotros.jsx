import Navbar from './Navbar';
import log from './Home';
import BotonVolver from './BotonVolver';
import '../Styles/Nosotros.css';


function Nosotros(props) {
    return (
        <>
            <Navbar log={log} />
            <div className="accordion" id="acordeon">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            HISTORIA
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p>
                                Eran los años en que gobernaba el Cnel. Marcos Pérez Jiménez, quien decidió hacer estudios para la
                                construcción en Caracas de un hipódromo que llenara las expectativas del creciente deporte hípico.
                                Una vez aprobado el proyecto, dio la orden que se buscara el sitio apropiado para construirlo, el cual
                                debía ser suficientemente grande y cercano a Caracas. Así, los expertos en terrenos llegaron a las
                                cercanías de Coche, e inspeccionaron una hacienda denominada “Haras La Rinconada”, allí
                                funcionaba uno de los criaderos más importantes del país -perteneciente a la sucesión Lander-; el
                                gobierno empezó a hacer los trámites con el representante de la sucesión Don Enrique Lander.
                                Los propietarios cedieron el terreno al gobierno venezolano y de inmediato se procedió a ejecutar el
                                proyecto. El gobierno contrató a un arquitecto norteamericano de nombre Arthur Froelich, quien era el
                                responsable del hipódromo de Aqueduct en la ciudad de Nueva York, con el fin que le diera la
                                conformación física necesaria, basada en los últimos adelantos de ingeniería mundial. Luego
                                contrataron a otro arquitecto, un brasilero, de nombre Roberto Burle Marx, quien se encargó de la
                                conformación de la jardinería.
                            </p>
                            <p>
                                Cuando ya la edificación del hipódromo estaba casi lista, cae el gobierno del Gral. Pérez Jiménez y
                                se paralizan las obras, para retomarlas 8 meses después. A principios de 1959, la Junta de Gobierno
                                presidida por el Contralmirante Wolfgang Larrazábal, crea el Instituto Nacional de Hipódromos, bajo la
                                presidencia del Tte. José Luis Fernández. Es así como el día 5 de julio de 1959 se inaugura el
                                fastuoso hipódromo capitalino "La Rinconada", acto que estuvo a cargo del ministro de Agricultura y
                                Cría, doctor Héctor Hernández Carabaño, en representación del Presidente de la República, Don
                                Rómulo Betancourt y con la presencia del presidente del Directorio del INH, Francisco Flamerich. El
                                recién inaugurado hipódromo constaba de tres tribunas espaciosas donde se encuentran esparcidas
                                doce localidades y 12.500 butacas, además de numerosos bares, cafetines y salones comedores
                                lujosamente instalados.
                            </p>
                            <p>
                                Poseía un óvalo de 1.600 metros, con dos salidas en ángulos opuestos; adjunto a éste uno de grama
                                para competencias en este tipo de canchas. Había otra tribuna en el poste de los ochocientos metros
                                finales, con función oficial en las mañanas de traqueos, sitio donde se ubicaban los jinetes y
                                entrenadores. Detrás de esto estaban las caballerizas, con suficientes y acondicionados boxes. Más
                                adelante el óvalo fue ampliado a 1.800 metros, con una recta final de 400 metros.
                            </p>
                            <p>
                                La primera carrera efectuada en el Hipódromo La Rinconada fue ganada por el ejemplar Juan Griego,
                                bajo la conducción de Félix García y el entrenamiento de Juan Evangelista Lander. Ese día se corrió
                                el Clásico Fuerzas Armadas, con triunfo para Banal, con la silla de Gustavo Ávila y el cuido del
                                legendario Millard Ziadie.
                            </p>
                            
                            
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            RESTAURACIONES
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p>
                                
                            </p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            INFRAESTRUCTURA
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p>
                                Cada tribuna tiene seis entradas de acceso, y en dos de ellas (A y C) estacionamientos para ocho mil
                                vehículos. Asimismo tiene área de expansión y recreo, miradores y espejos de agua. Las localidades
                                tenían, igualmente, entre 15 y 40 taquillas para la venta y cobro de boletos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <BotonVolver />
        </>

    );
}

export default Nosotros