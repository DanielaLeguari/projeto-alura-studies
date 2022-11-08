import { ITarefa } from '../../../types/tarefas';
import style from './Item.module.scss';

//extends para reaproveitar uma propriedade na outra
interface Props extends ITarefa {

    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}
const Item = (
    {
        tarefa,
        tempo,
        selecionado,
        completado,
        id,
        selecionaTarefa
    }: Props) => {
    console.log('item atual:')
    return (
        <li
            // aplicando estilo no item selecionado
            className={`${style.item} ${selecionado ? style.itemSelecionado : ''}`}
            onClick={() => selecionaTarefa(
                {
                    tarefa,
                    tempo,
                    selecionado,
                    completado,
                    id
                }
            )}>
            <h3>
                {tarefa}
            </h3>
            <span>
                {tempo}
            </span>
        </li>
    )
}


export default Item;