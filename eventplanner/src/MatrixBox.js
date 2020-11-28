
import Button from 'react-bootstrap/Button';
import './MatrixBox.css'

function MatrixBox( props )  {
    return (
        <Button variant='primary' size='lg' className='MatrixButton'>{ props.value }</Button>
    )
}

function MatrixGroup( props ) {
    let boxArray = [];
    for( let counter=1; counter<=Number( props.numBox ); counter++ ) {
        //boxArray.push( counter.toString() );
        boxArray.push( Math.floor( Math.random() * ( Math.floor( 1002 ) - Math.ceil( 1 ) + 1 ) ) );  
    }
//console.log( retObject )
    return (
        <div  className='MatrixBox'>
            <h1 className='Title'>CONCENTRESE</h1>
            {boxArray.map(( boxId, index ) => (
                <MatrixBox key={index + 1} value={index + 1}>{boxId}</MatrixBox>
            ))}
        </div>
    )
}

export default MatrixGroup;