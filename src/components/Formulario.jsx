import React, { useState } from 'react'

const Formulario = () => {
    const [llave, setLlave] = useState(false)
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [id, setId] = useState(0)
    const [lista, setLista] = useState([])

    const guardarDatos = (e) => {

        if (!nombre.trim() || !apellido.trim()) return alert('Digite el nombre y apellido')

        if (llave) {

            lista[id].nombre = nombre
            lista[id].apellido = apellido

        } else {
            setLista([
                ...lista,
                { id: id, nombre: nombre, apellido: apellido }
            ])
        }

        setId(id + 1)
        setLlave(false)
        e.target.reset()
        e.preventDefault()
        setNombre('')
        setApellido('')


    }

    const edit = (elemento) => {

        setNombre(elemento.nombre)
        setApellido(elemento.apellido)
        setId(elemento.id)
        setLlave(true)

    }

    const deleteUser = (elemento) => {



        setLista(current =>
            current.filter(lista => {
                return lista.id !== elemento.id;
            }),
        );

    }


    return (
        <div>


            <form onSubmit={guardarDatos}>
                <input  value={nombre} type="text" placeholder='Ingrese nombre' className='form-control m-2 p-3'
                    onChange={(e) => setNombre(e.target.value)} />
                <input value={apellido} type="text" placeholder='Ingrese apellido' className='form-control m-2 p-3'
                    onChange={(e) => setApellido(e.target.value)} />
                <div className='d-grip gap-2 d-md block'>
                    <button className='m-3 btn btn-info' type='submit'>Agregar</button>

                </div>

            </form><hr />


            <ul >
                {
                    lista.map((elemento) => (<li key={elemento.id}> {elemento.nombre} {elemento.apellido}
                    <button onClick={() => edit(elemento)} className='m-3 btn btn-info' type='submit'>Editar</button>
                    <button onClick={() => deleteUser(elemento)} className='m-3 btn btn-danger' type='submit'>Eliminar</button> </li>))
                }

            </ul>


        </div>
    )
}

export default Formulario