import React from 'react'
import styled from 'styled-components'
import is from 'styled-is'
import Layout from '../src/Layout'

const FacebookLogo = styled.i`
  background-image: url('https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/glFjOuBfbbi.png');
  width: 170px;
  height: 34px;
  background-position: 0 0;
`

const Text = styled.div`
  color: white;
  font-family: system-ui, -apple-system, system-ui, '.SFNSText-Regular',
    sans-serif;
  font-size: 12px;
  -webkit-font-smoothing: subpixel-antialiased;

  ${is('alternate')`
    color: #9cb4d8;
  `};
`

const Input = styled.input`
  border: 1px solid #1d2a5b;
  height: 24px;
  padding: 3px 3px 4px 3px;
  width: 142px;

  font-family: system-ui, -apple-system, system-ui, '.SFNSText-Regular',
    sans-serif;
  font-size: 12px;
  -webkit-font-smoothing: subpixel-antialiased;
`

const Button = styled.button`
  background-color: #4267b2;
  border: 1px solid #29487d;
  height: 24px;
  padding: 2px 6px;

  color: white;
  font-family: system-ui, -apple-system, system-ui, '.SFNSText-Regular',
    sans-serif;
  font-size: 12px;
  -webkit-font-smoothing: subpixel-antialiased;
`

export default () => (
  <Layout xAlign='center' bg='#3b5998' height='83px' bb='1px solid #133783'>
    <Layout
      flow='left-right'
      maxWidth='1044px'
      height='56px'
      pt='13px'
      px='32px'
      spaceBetweenChildren='remaining'
    >
      <Layout pt='17px'>
        <FacebookLogo />
      </Layout>
      <Layout flow='left-right' spaceBetweenChildren='14px'>
        <Layout spaceBetweenChildren='4px'>
          <Text>Email or Phone</Text>
          <Input />
        </Layout>
        <Layout spaceBetweenChildren='4px'>
          <Text>Password</Text>
          <Input />
          <Text alternate>Forgot account?</Text>
        </Layout>
        <Layout pt='19px'>
          <Button>Log In</Button>
        </Layout>
      </Layout>
    </Layout>
  </Layout>
)
