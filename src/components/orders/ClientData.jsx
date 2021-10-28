import React from 'react'

export default function ClientData({ name, setName, table, setTable }) {
    return (
        <div>
            <section className="dataClient">
              <p className="dataClient-text">NOMBRE DEL CLIENTE:</p>
              <input type="text" className="name-box" value={name} onChange={(e) => { setName(e.target.value) }} />
            </section>
            <section className="dataClient">
              <p className="dataClient-text">NUMERO DE MESA:</p>
              <input type="text" className="name-box" value={table} onChange={(e) => { setTable(e.target.value) }} />
            </section>
        </div>
    )
}


