import React from "react";
import img from "../img/img1.jpeg"
import style from "./About.module.css"

export default function About (){
    return (
        <div>
            <div>
                <img className={style.img} src={img} alt="" />
            </div>
            <div>
                <h1 className={style.titulo}>Mi primer aplicación con React</h1>
            </div>
            <div className={style.contenedor1}>
                <h3>¿Como fue mi experiencia 
                trabajando con React?</h3>
                <div>
                    <p>Trabajar con React es una tarea extenuante y <br />
                    un poco compleja, sobre todo cuando es la <br /> 
                    primera vez que te encuentras con una librería <br /> 
                    de su tipo, sin embargo, siento que deja una experiencia <br /> 
                    gratificante, siento que se abarcaron amplios y muy buenos <br /> 
                    conocimientos en todo el area de trabajo de React.
                    </p>
                </div>
            </div>
            <br />            
            <div className={style.contenedor2}>
                <h3>¿De que trata este proyecto?</h3>
                <div>
                    Este proyecto es la culminación de todo lo aprendido en el modulo 2 de 
                    Henry, la integracion de las partes escencial de React, a trávez de las 
                    ultimas 3 semanas estuvimos integrando desde las partes mas basicas, hasta las 
                    mas complejas en lo que es, el funcionamiento de React, empezamos integrando 
                    componentes, aprendiendo a darle estilos y asi, poco a poco fuimos avanzando hasta 
                    poder consumir una API a travez del metodo FECH O AXIOS, en este proyecto 
                    tambien se puede un formulario con una validación local, y aunque basica, nos 
                    ayuda a conocer mas del funcionamiento de React, tambien los estados, hooks, ciclo de 
                    vida y demás. Este proyecto es una gran herramienta para entender el funcionamiento 
                    de React y la posterior integración de Redux que nos permite trabajar de una forma mas profesional
                </div>
                </div>
                <br />
            <div className={style.contenedor2} >
                <h3>Un poco de mí estudiando en Henry</h3>
                <div>
                    Estuve aprendiendo por mi cuenta un poco de programación 
                    en java script, pero sentía que no tenía una guía escencial o un
                    camino claro que seguir, encontraba un sin fin de videos hablando
                    de cual era la mejor ruta a seguír para convertirme en un desarrollador junior,
                    hasta que descubrí Henry, desde que conocí su modelo y plan de
                    estudios supe que este era el bootCamp que necesitaba, ya que me
                    ofrecían una muy buena base y sobre todo una dirección para alcanzar
                    mi meta de ser desarrollador.
                </div>
            </div>
            </div>
    )
}