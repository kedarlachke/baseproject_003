import React,{useMemo,useEffect,useState} from 'react'
import { connect } from 'react-redux'
import {useTable,useSortBy,useGlobalFilter,usePagination,useRowSelect } from 'react-table'
import {GlobalFilter} from './GlobalFilter'
import { Checkbox } from './Checkbox'
import UserComponent from './UserComponent'
import AddFabButton from '../common/Fab/AddFabButton'
import Table from '../common/table/Table'
import Column from '../common/table/Column'
import ColumnHead from '../common/table/ColumnHead'
import {
  Redirect,
  withRouter } from 'react-router-dom'
export const UserListComponent = (props:any) => {
   const [docno, setDocno] = useState('NO-ID')
   const [redirect, setRedirect] = useState(false)
   const setDocStatus=(id:string,redirect:boolean)=>{
       
       setDocno(id)
       setRedirect(redirect)
   }
   const goback=()=>{
    setDocno("")
    setRedirect(redirect)
   }
   const tabledata =useMemo(()=>[...props.users],[]) 
   if(redirect){
    let redirectpath='/useredit?_id='+docno
    return <Redirect push to={redirectpath} />;

     
  }else
    return (
        
           <div className="projects">
      <div className="card">
        <div className="card-body">
          <div className="table-response">
          <Table 
  data={tabledata}
  defaultNoOfRows={10}
  actionColWidth={150}
  actions={[{
    action:(id:any)=>{
      setDocStatus(id,true)
    },
    icon:"fas fa-edit",
    text:"Edit",
    className:"table-button submit"
  },{
    action:(id:any)=>{alert(id)},
    icon:"fas fa-trash-alt",
    text:"delete",
    className:"table-button danger"
  },{
    action:(id:any)=>{alert(id)},
    icon:"fas fa-trash-alt",
    text:"delete",
    className:"table-button danger"
  }]}
>

 <Column fieldname="firstname" columnname="Project Title" ></Column>

 <Column fieldname="lastname" columnname="Status" ></Column>
 <Column fieldname="username" columnname="Department" ></Column>
</Table>
        </div>
        </div>
        </div>
        <AddFabButton action={setDocStatus}/>
        </div>
        
    )
}

const mapStateToProps = (state:any) => ({
    users:state.documents.users,
    docnos:state.documents.docnos,
    companies:state.documents.companies,
})

const mapDispatchToProps =(dispatch:any)=> {
    
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserListComponent))
