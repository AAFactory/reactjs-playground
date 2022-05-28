// 액션 타입
const INCREASE = 'INCREASE'
const DECREASE = 'DECREASE'

// 액션 생성 함수
export const increase = () => ({ type: INCREASE })
export const decrease = () => ({ type: DECREASE })

// getState를 쓰지 않는다면 굳이 파라미터로 받아올 필요 없습니다.
// ReduxThunk (import ReduxThunk from 'redux-thunk';) 미들웨어를 적용하여 dispatch단계에서 복합적인 작업을 할 수 있음
export const increaseAsync = () => (dispatch, getState) => {
    console.log(getState())
    setTimeout(() => dispatch(increase()), 1000)
}
export const decreaseAsync = () => (dispatch) => {
    setTimeout(() => dispatch(decrease()), 1000)
}

// 초깃값 (상태가 객체가 아니라 그냥 숫자여도 상관 없습니다.)
const initialState = 0

export default function counter(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return state + 1
        case DECREASE:
            return state - 1
        default:
            return state
    }
}
