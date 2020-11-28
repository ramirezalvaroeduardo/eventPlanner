
import Button from 'react-bootstrap/Button';
import './MatrixBox.css'

function MatrixBox( props )  {
    return (
        <Button variant='primary' size='lg' className='MatrixButton'>{ props.value }</Button>
    )
}

function MatrixGroup( props ) {
    let boxArray = [];
    let boxObj   = {};
    let minVal=0;
    let maxVal=0;
    // Loop to assign random values per pair of squares
    for( let counter=1; counter<=( Number( props.numBox ) ); counter++ ) {
        if( boxObj[counter] === undefined ) {
            // Assign random value to current square
            minVal=Math.ceil( 1 );
            maxVal=Math.floor( 1002 );
            boxObj[counter]=Math.floor( Math.random() * ( maxVal - minVal + 1 ) + minVal );
            // Assign ame value to random Square pair
            minVal=Math.ceil( counter );
            maxVal=Math.floor( Number( props.numBox ) );
            var selBox=Math.floor( Math.random() * ( maxVal - minVal + 1 ) + minVal );
            while( boxObj[selBox] !== undefined ) {
                selBox=Math.floor( Math.random() * ( maxVal - minVal + 1 ) + minVal );
            }
            boxObj[selBox]=boxObj[counter];
        }
    }
    // Loop to set array of values chosen
    for( let item in boxObj ){
        boxArray.push( boxObj[item] );
    }
    console.log(boxObj);

    return (
        <div  className='MatrixBox'>
            <h1 className='Title'>CONCENTRESE</h1>
            {boxArray.map(( boxId, index ) => (
                <MatrixBox key={index + 1} value={boxId}>{boxId}</MatrixBox>
            ))}
        </div>
    )
}

export default MatrixGroup;