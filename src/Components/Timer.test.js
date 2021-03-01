import {Timer} from './Timer'
import {shallow} from './../enzyme'

describe('Timer',()=>{
it('should have 3 Button',()=>{
    const wraper =shallow(<Timer/>)
    expect(wraper.find('button').length).toEqual(3)


})
})