import  React from 'react'
import {Button, Card, List} from 'antd'
import StopOutlined from "@ant-design/icons/lib/icons/StopOutlined";
const FollowList = ({header, data}) =>{
 return(
     <List
         style={{marginBottom:20}}
         grid={{gutter:4, xs:2, md:3}}
         size="small"
         header={<div>{header}</div>}
         loadeMore={<div style={{textAlign:"center", margin:"10px 0"}}><Button>더보기</Button></div>}
         dataSource={data}
         renderItem={(item)=>(
             <List.Item style={{marginTop:20}}>
                <Card action={[<StopOutlined key="stop" />]}>
                    <Card.Mete description={item.nickname} />
                </Card>
             </List.Item>
         )}
     />
 )
}
export  default FollowList