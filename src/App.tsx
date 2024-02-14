import { css } from '@emotion/react'
import './App.css'
import Text from '@shared/Text'
import Button from './components/shared/Button'
import Input from './components/shared/Input'
import TextField from './components/shared/TextLabel'
import Alert from './components/shared/Alert'

const bold = css`
  font-weight: bold;
`
const containerStyles = css`
  background-color: pink;
  ${bold};
`
function App() {
  return (
    <div className="App" css={containerStyles}>
      <Text typography="t1" display="block" color="red">
        t1
      </Text>
      <Text typography="t2">t2</Text>
      <Text typography="t3">t3</Text>
      <Text typography="t4">t4</Text>
      <Text typography="t5">t5</Text>

      <div style={{ height: 10, width: '100%', background: '#efefef' }}>
        <Button>클릭해주세요</Button>
        <Button color="success">클릭해주세요</Button>
        <Button color="error">클릭해주세요</Button>
        <Button color="success" weak={true}>
          클릭해주세요
        </Button>
        <Button color="error" weak={true}>
          클릭해주세요
        </Button>
        <Button full={true}>클릭해주세요</Button>
        <Button full={true} disabled={true}>
          클릭해주세요
        </Button>
        <Input placeholder="로그인" aria-invalid={true} />
        <Input />

        <TextField label="아이디" />
        <TextField label="패스워드" hasError={true} />
      </div>

      {/* <Alert
        title="알럿이 떴다"
        open={true}
        onButtonClick={() => {}}
        description="안녕" */}
      />
    </div>
  )
}

export default App
