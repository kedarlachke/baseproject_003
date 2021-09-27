import React, { useState } from 'react'
import Column from './Column'
import ColumnHead from './ColumnHead'
import {Pagination} from './Pagination';
import SMIconButton from './SMIconButton';
function Table(props: any) {
    let { data,actions,actionColWidth } = props
    const [selectedColumn, setSelectedColumn] = useState("");
    const [order, setOrder] = useState("");
    const [activePage, setActivePage] = useState(1);
    const [numberOfRecordsPerPage, setNumberOfRecordsPerPage] = useState(5)
    function sortSelectedColumn(selectedcolumn: string, order: string) {
        setOrder(order);
        setSelectedColumn(selectedcolumn)
    }

    data.sort(compare)
    function compare(a: any, b: any) {
        if(order==="asc"){
        if (a[selectedColumn] < b[selectedColumn]) {
            return -1;
        }
        if (a[selectedColumn] > b[selectedColumn]) {
            return 1;
        }
        return 0;
    }else{
        if (a[selectedColumn] > b[selectedColumn]) {
            return -1;
        }
        if (a[selectedColumn] < b[selectedColumn]) {
            return 1;
        }
        return 0;
    }
    }
  const pageData=[]
  
  for(let i=(activePage-1)*numberOfRecordsPerPage;i<(((activePage-1)*numberOfRecordsPerPage)+numberOfRecordsPerPage) && i<data.length;i++){
    pageData.push(data[i])
  }
 const globalSearch=(searchtext:string)=>{
     let keys=Object.keys(data[0])
     for(let key of keys){

     }
 }
    return (
        
        <>
        
            {/* {renderChildren(props.children)} */}
            <div className="projects">

                {selectedColumn}
                <div className="card">
                    <div className="card-header">
                        
                        <h3>Recent Project({data.length})</h3>
                        <div><input placeholder="search" style={{height:'40px',fontSize:"16px"}}/><i className="fas fa-times"/><i className="fas fa-search"/></div>
                        
                        
                    </div>
                    <div className="card-body">
                        <div className="table-response">
                            <table width="100%">
                                <thead>
                                    <tr>{props.children.map((ele: any) => (<ColumnHead selectColumn={sortSelectedColumn} fieldname={ele.props.fieldname} selectedcolumn={selectedColumn} width={ele.props.width}>{ele.props.columnname}</ColumnHead>))}
                                            {actions?.length>0 ?<ColumnHead width={actionColWidth} selectColumn={()=>{}}>Action</ColumnHead>:null}
                                    </tr>
                                </thead>
                                <tbody>
                                    {pageData.map((data: any) => { 
                                    return (<tr>{props.children.map((ele: any) => {
                                        const { fieldname, columnname,render,width } = ele.props
                                       
                                        return <Column data={data[fieldname]} />
                                    })}
                                    {<Column data={<div className="table-button-container">{actions.map((action:any,i:any)=>{
                                        return(<SMIconButton action={action.action} id={data["projectTitle"]} icon={action.icon} className={action.className}/>)})}</div>}/>
                                    }
                                    </tr>)})
                                

                                }</tbody></table>
                        </div>
                    </div>
                </div>
                <Pagination 
                    number={Math.ceil(data.length/numberOfRecordsPerPage)} 
                    activePage={activePage} setActivePage={setActivePage} 
                    numberOfRecordsPerPage={numberOfRecordsPerPage}
                    setNumberOfRecordsPerPage={setNumberOfRecordsPerPage}
                />
            </div>
        </>
    )
}

export default Table
