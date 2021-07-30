import { Button } from './Button'
import { useCountContext } from './Context/SharedContext'
import { Image } from './Context/Image'
export const AppComponent  = () => {

    const {state:{count},dispatch} = useCountContext() 

    return(
        <>
            <h1> this is the app component </h1>
            <Button />
            <h1> Count : { count }</h1>
            <Image />
        </>
    )
}