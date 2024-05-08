import {Menu} from 'antd'
function Navigation(){
  const items = [
    {label: 'Home'},
    {label: 'Profile'}
  ]
    return (
      <Menu  mode="horizontal" items={items} />
    )
}

export default Navigation