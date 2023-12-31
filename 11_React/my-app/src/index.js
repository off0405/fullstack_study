import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";



import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import JsxUse from './chapter3/3.4/JsxUse';
import Library from './chapter3/Library';
import Clock from './chapter4/Clock';
import PropsUse from './chapter5/PropsUse';
import CommentList from './chapter5/CommentList';
import CommentEx from './chapter5/5.6/CommentEx';
import NotificationList from './chapter6/NotificationList';
import Counter from './chapter7/7.2/Counter';
import SetStateMerge from './chapter7/7.2/SetStateMerge';
import Toggle from './chapter8/8.1/Toggle';
import MyButton from './chapter8/8.1/8.2/MyButton';
import ConfirmButton from './chapter8/ConfirmButton';
import Greeting from './chapter9/9.1/Greeting';
import LoginControl from './chapter9/9.2/LoginControl';
import LoginControlRefactoring from './chapter9/9.3/LoginControlRefactoring';
import MailBox from './chapter9/9.3/MailBox';
import MainPage from './chapter9/9.4/MainPage';
import Toolbar from './chapter9/Toolbar';
import NumberList from './chapter10/10.1/NumberList';
import ListKey from './chapter10/10.1/10.2/ListKey';
import AttendanceBook from './chapter10/AttendanceBook';
import Nameform from './chapter11/11.2/Nameform';
import EssayForm from './chapter11/11.3/EssayForm';
import FlavorForm from './chapter11/11.3/FlavorForm';
import FileInput from './chapter11/11.3/FileInput';
import TextInputWithFocusButton from './chapter7/7.2/7.6/TextInputWithFocusButton';
import Reservation from './chapter11/11.4/Reservation';
import SignUp from './chapter11/SignUp';
import ReservationRefactoring from './chapter11/11.4/ReservationRefactoring';
import ReservatingRefactoring from './chapter11/11.4/ReservationRefactoring';
import UnitCounter from './chapter12/UnitCounter';
import UnitCalculator from './chapter12/UnitCalculator';
import WelcomDialog from './chapter13/13.1.1.1/WelcomDialog';
import SplitPaneSection from './chapter13/13.1.1.2/SplitPaneSection';
import Dialog from './chapter13/13.1.2/Dialog';
import DialogContainer from './chapter13/13.1.2/DialogContainer';
import SignUpDialog from './chapter13/13.1.3/SignUpDialog';
import ProfileCard from './chapter13/ProfileCard';
import StyledPage from './chapter15/StyledPage';
import Blocks from './chapter15/theme/Blocks';
import ThemeApp from './chapter15/theme/ThemeApp';
import ComponentVariable from './chapter7/7.2/7.6/ComponentVariable';
import SimpleRouter from './chapter16/SimpleRouter';
import CounterEffect from './chapter7/7.2/7.3/ex1/CounterEffect';
import EffectSummary from './chapter7/7.2/7.3/ex2/EffectSummary';
import EffectContainer from './chapter7/7.2/7.3/ex2/EffectContainer';
import TimerContainer from './chapter7/7.2/7.3/ex3/TimerContainer';
import ApiRequest from './chapter17/ApiRequest';
import ReduxTestApp from './chapter18/ReduxTestApp';
import { store } from './chapter18/app/store';

const root = ReactDOM.createRoot(document.getElementById('root'));



// const messages = ['React', 'Re: React', 'Re:Re: React'];
const messages = [];

root.render(
  // <App />

  // 4장 예제
  // 1초마다 Clock 컴포넌트를 렌더링하는 코드
  // 실제 개발에서 이렇게 쓰는 경우는 없고 State를 변경해서 재렌더링
  // setInterval(() => {
  //   root.render(
  //     <Clock />
  //   )
  // }, 1000)

  // 5장 예제
  // <PropsUse />

  // <NotificationList />

  // 7장 예제
  // <Counter />
  // <TextInputWithFocusButton />
  // <FileInput />
  // <ComponentVariable/>
  // <CounterEffect/>
  // <EffectSummary/>
  // <EffectContainer/>
  // <TimerContainer/>


  // <SetStateMerge />

  // 8장 예제
  // <Toggle />
  // <MyButton />

  // <ConfirmButton />

  // 9장 예제
  // <Greeting isLoggedIn={true}/>
  // <LoginControl />
  // <LoginControlRefactoring />

  // <MailBox unreadMessages={messages} />
  // <MainPage />

  // <Toolbar />

  //10장 예제
  // <NumberList />
  // <ListKey />
  // <AttendanceBook />

  // 11장 예제
  // <Nameform />
  // <EssayForm />
  // <FlavorForm />
  // <FileInput />
  // <Reservation />
  // <SignUp />
  // <ReservatingRefactoring/>
  // <ReservationRefactoring />


  // 12 장 예제
  // <UnitCounter />
  // <UnitCalculator />

  // 13장 예제
  // <WelcomDialog />
  // <SplitPaneSection />
  // <DialogContainer/>
  // <SignUpDialog/>
  // <ProfileCard/>

  // 15장 예제
  // <StyledPage />
  // <Blocks />
  // <ThemeApp />

  // 16장 예제
  // <SimpleRouter />

  // 17장 예제
  <ApiRequest />

  // 18장 예제
  // 2. 리액트에 Redux Store 제공하기
  // <Provider> : ReduxTestApp 컴포넌트와 그 하위 자식들이 Redux Store에 접근 가능하게 "제공"
  // Redux Store에 저장된 state들을 마음대로 꺼내 쓸 수 있게 해줘
  // <Provider store={store}>
  //   <ReduxTestApp />
  // </Provider>




  // 3장 예제
  // <JsxUse />
  // <Library />
  // <Clock />
  // <CommentList />
  // <CommentEx 
  //   author = {{
  //     name: "강하경",
  //     avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
  //   }}
  //   text="첫 방문"
  //   date="2023-10-18"
  // />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
