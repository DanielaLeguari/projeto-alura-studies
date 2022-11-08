import { useEffect, useState } from 'react';
import tempoParaSegundos from '../../common/utils/time';
import { ITarefa } from '../../types/tarefas';
import Button from '../Button';
import Relogio from './Relogio';
import style from './Timer.module.scss'

interface Props {
    selecionado: ITarefa | undefined
}

const Timer = ({ selecionado }:
    Props) => {
    const [tempo, setTempo] = useState<Number>();

    useEffect(() => {
        if (selecionado?.tempo) {
            setTempo(tempoParaSegundos(selecionado.tempo))
        }
    }, [selecionado])

    return (

        <>
            <div className={style.cronometro}>
                <p className={style.titulo}>
                    Escolha um card e inicie o cronômetro:
                </p>
                {/* Tempo:{tempo} */}
                <div className={style.relogioWrapper}>
                    <Relogio />
                </div>
            </div>
            <Button>
                Começar
            </Button>

        </>
    )
}

export default Timer;