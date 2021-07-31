
import { useCountContext } from './Context/SharedContext'


export const Button = () => {
    
    const {dispatch} = useCountContext()

    const buttons = ['+' , '-']
    
    return(
        <>
            {
                buttons.map((symbol,index) => {
                    return(
                        <>
                            <button key = { index } onClick={ () => dispatch({type:symbol}) }> 
                                { symbol } 
                            </button>
                        </>
                    )
                })
            }
        </>
    )
}