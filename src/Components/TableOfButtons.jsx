import React,{useState} from 'react'

const TableOfButtons = () => {
    const [operation, setOperation] = useState('')
    const values =[
        
        ['9','8','7','/'],
        ['6','5','4','*'],
        ['3','2','1','-'],
        ['0','.','=','+']       
    ]

    const handleClick=(val)=>{
        if(isNaN(val)&& val!=='.'){
            setOperation(operation+" "+val+" ")
        }else{
            setOperation(operation+val)
        }
    }
    const calculate =()=>{
        const opera = operation.split(" ")
        

        switch(opera[1]){
            case '+':
                setOperation(parseFloat(opera[0])+ parseFloat(opera[2]))
                break;
            case '-':
                setOperation(parseFloat(opera[0])- parseFloat(opera[2]))
                break;
            case '*':
                setOperation(parseFloat(opera[0])* parseFloat(opera[2]))
                break;
            case '/':
                setOperation(parseFloat(opera[0])/ parseFloat(opera[2]))
                break;
            default:
                setOperation('Invalid Operation')
        }

    }


  return (
    <table className="table  table-bordered" style={{width: '50%'}}>
        <thead>
            <tr>
                <th className="cols" colSpan="4"> <input readOnly={true} className="form-control" style={{width:'100%'}} value={ operation}></input> </th>
            </tr>
        </thead>
        <tbody width='100px'>
            <tr>
                <td  onClick={()=>setOperation('')} style={{width:'10px'}}>Clear</td>
            </tr>
            {
                values.map(row=><tr >{row.map(val=> val!=="="? <td key={val} onClick={()=>handleClick(val)}>{val}</td>: <td onClick={calculate}>{val}</td>)}</tr>)
            }   
        </tbody>
    </table>
  )
}

export default TableOfButtons