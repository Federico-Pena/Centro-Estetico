import { useContext, useEffect, useRef, useState } from 'react'
import './FormularioReserva.scss'
import { formularioReservaSubmit } from './formularioReservaSubmit'
import { BotónPrimario } from '../../Botones/BotonPrimario'
import { fechasHorasReservadasDelDia } from '../../../services/publica/fechasHorasReservadasDelDia'
import { LoaderChico } from '../../Loader/LoaderChico'
import { UserContext } from '../../../context/userContext'
import { MensajeToast } from '../../../context/mensajeContext'
import { BotónSecundario } from '../../Botones/BotonSecundario'
import { formatFechaParaUser } from '../../../helpers/Formato/formatFechaParaUser'
import { ESTADOS_RESERVAS } from '../../../constantes'

export const FormularioReserva = ({ observaciones, cerrarFormulario }) => {
  const [nombre, setNombre] = useState('')
  const [dia, setDia] = useState('')
  const [hora, setHora] = useState('')
  const [loading, setLoading] = useState(false)
  const [horasDisponibles, setHorasDisponibles] = useState([])
  const formRef = useRef()
  const { accessToken } = useContext(UserContext)
  const { setMensaje } = useContext(MensajeToast)

  useEffect(() => {
    formRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
    const horasLibres = async () => {
      setLoading(true)
      try {
        const res = await fechasHorasReservadasDelDia(dia, accessToken)
        const { horas, error } = res
        if (error) {
          setMensaje(error)
          setHora('')
          setHorasDisponibles([])
        } else {
          setHorasDisponibles(horas)
          if (horas.length === 0) {
            setHora('')
          }
        }
        setLoading(false)
      } catch (error) {
        setLoading(false)
      }
    }
    /* accessToken && */ dia && horasLibres()
  }, [accessToken, dia, setMensaje])

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = formRef.current
    if (form.pacienteNombre.value.trim() && dia && hora) {
      formularioReservaSubmit(formRef, hora)
      cerrarFormulario(e)
      setHorasDisponibles([])
      setMensaje('')
    } else {
      setMensaje('Faltan campos requeridos')
    }
  }
  const onClickReservar = (e) => {
    setHora(e.target.textContent)
  }
  return (
    <section className='formReservaContainer'>
      <BotónSecundario
        className='cerrarForm'
        texto={'Cerrar Formulario'}
        tipo={'button'}
        onClickFunction={cerrarFormulario}
      />
      <form onSubmit={handleSubmit} className='formReserva' ref={formRef}>
        <h3>Reserva</h3>
        <div className='input'>
          <label htmlFor='pacienteNombre'>Nombre</label>
          <input
            id='pacienteNombre'
            type='text'
            name='pacienteNombre'
            required
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className='input'>
          <label htmlFor='fecha'>Fecha</label>
          <input
            id='fecha'
            type='date'
            name='fecha'
            required
            onChange={(e) => setDia(e.target.value.split('T')[0])}
          />
        </div>
        {horasDisponibles.length > 0 && (
          <div className={`input`}>
            <ul className='horasDisplay'>
              {horasDisponibles.map((hora, i) => {
                return (
                  i !== 0 &&
                  i !== 1 &&
                  hora.estado !== ESTADOS_RESERVAS.pendiente &&
                  hora.estado !== ESTADOS_RESERVAS.pago &&
                  !hora.proximaHoraNoDisponible && (
                    <li className='liHora' key={hora.id} onClick={onClickReservar}>
                      {hora.id.split(' ')[1]}
                    </li>
                  )
                )
              })}
            </ul>
          </div>
        )}
        <div className='input'>
          <label htmlFor='observaciones'>Observaciones</label>
          <input
            id='observaciones'
            type='text'
            name='observaciones'
            value={observaciones}
            disabled={true}
          />
        </div>
        <div className='input'>
          {nombre && (
            <span className='spanHora'>
              Nombre <strong>{nombre}</strong>
            </span>
          )}
          {dia && (
            <span className='spanHora'>
              Dia <strong>{formatFechaParaUser({ fecha: `${dia} ${hora}` })}</strong>
            </span>
          )}
          {hora && (
            <span className='spanHora'>
              Hora <strong>{hora}</strong>
            </span>
          )}
          {observaciones && (
            <span className='spanHora'>
              Observaciones <strong>{observaciones}</strong>
            </span>
          )}
        </div>
        <BotónPrimario texto={loading ? <LoaderChico /> : 'Enviar'} tipo={'submit'} />
      </form>
    </section>
  )
}
