import { useEffect, useState } from 'react';
import tempoParaSegundos from '../../common/utils/time';
import { ITarefa } from '../../types/tarefas';
import Button from '../Button';
import Relogio from './Relogio';
import style from './Timer.module.scss'

interface Props {
    selecionado: ITarefa | undefined,
    finalizarTarefa: () => void
}

const Timer = ({ selecionado,
    finalizarTarefa }:
    Props) => {
    const [tempo, setTempo] = useState<number>();

    useEffect(() => {
        if (selecionado?.tempo) {
            setTempo(tempoParaSegundos(selecionado.tempo))
        }
    }, [selecionado]);

    const regressiva = (contador: number = 0) => {
        setTimeout(() => {
            if (contador > 0) {
                setTempo(contador - 1);  //recursividade
                return regressiva(contador - 1); // executa tempo -1
            }
            finalizarTarefa();
        }, 1000);
    }

    return (

        <>
            <div className={style.cronometro}>
                <p className={style.titulo}>
                    Escolha um card e inicie o cronômetro:
                </p>
                <div className={style.relogioWrapper}>
                    <Relogio tempo={tempo} />
                </div>
            </div>
            <Button
                onClick={() => regressiva(tempo)}
            >
                Iniciar!
            </Button>

        </>
    )
}

export default Timer;