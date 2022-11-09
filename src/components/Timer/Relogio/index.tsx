import style from './Relogio.module.scss';

interface Props {
    tempo: number | undefined
}

const Relogio = ({ tempo = 0 }: Props) => {
    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;
    const [minutoDezena, minutoUnidade] = String(minutos)
        .padStart(2, '0');
    const [segundoDezena, segundoUnidade] = String(segundos)
        //permite cadeia de caracteres padrão e se não tiver um um numero min, ele transforma em caracteres padroes
        .padStart(2, '0'); // 2 é o length, '0' default 
    return (
        <>
            <span className={style.relogioNumero}>
                {minutoDezena}
            </span>
            <span className={style.relogioNumero}>
                {minutoUnidade}
            </span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>
                {segundoDezena}
            </span>
            <span className={style.relogioNumero}>
                {segundoUnidade}
            </span>
        </>
    )
}

export default Relogio;