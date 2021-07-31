import { Button } from './Button'
import { useCountContext } from './Context/SharedContext'
import abc from './download.jpeg'
export const AppComponent  = () => {

    const {state:{count}} = useCountContext() 

    return(
        <>
            <h1> this is the app component </h1>
            <Button />
            <h1> Count : { count }</h1>
            <img src = {abc} alt='rtetrerte'/>
        </>
    )
}