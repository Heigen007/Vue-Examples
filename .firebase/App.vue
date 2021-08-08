<template>
  <div class="home">
    <div class="MainBox">
      <div class="row">
        <span>Choose the period of time：</span>
        <DatePicker v-model="time" type='datetime' format= "YYYY-MM-DD HH:mm" range></DatePicker>
      </div>
      <hr style='width: 100%; box-shadow: 0 0 3px rgb(0,0,0)'>
      <div class="Week">
        <div v-for="(el,i) in WeekDays" :key = i class="row WeekDay MainBox">
          <span>{{el.name}}</span>
          <DatePicker v-if='!el.IsTime' v-model="el.time" type='time' format= "HH:mm" range></DatePicker>
          <div>Holiday day <input type="checkbox" v-model='el.IsTime'></div>
          <div class='DayRests' v-if='!el.IsTime'>
            <div class = 'Button' @click='el.rests.push([])' style='font-size: 1.3rem; display: flex; flex-direction: column; align-items: center'>Add rest</div>
            <div v-if='el.rests.length > 0' class = 'Button Delete' @click='el.rests.pop()' style='font-size: 1.3rem; display: flex; flex-direction: column; align-items: center'>Delete rest</div>
            <div v-for='(rest, o) in el.rests' :key='o'>
              <DatePicker v-model="el.rests[o]" type='time' format= "HH:mm" range></DatePicker>
            </div>
          </div>
        </div>
      </div>
      <hr style='width: 100%; box-shadow: 0 0 3px rgb(0,0,0)'>
      <div style='font-size:'>Holidays</div>
      <div class = 'Button' @click='Holidays.push(null)' style='font-size: 1.3rem; display: flex; flex-direction: column; align-items: center'>Add holiday</div>
      <div v-if='Holidays.length > 0' class = 'Button Delete' @click='Holidays.pop()' style='font-size: 1.3rem; display: flex; flex-direction: column; align-items: center'>Delete holiday</div>
      <div v-for='(rest, y) in Holidays' :key='y'>
        <DatePicker v-model="Holidays[y]"></DatePicker>
      </div>

      <hr style='width: 100%; box-shadow: 0 0 3px rgb(0,0,0)'>
      <div style='font-size:'>Extra days functional</div>
      <div class = 'Button' @click='ExtraDays.push([])' style='font-size: 1.3rem; display: flex; flex-direction: column; align-items: center'>Add extra day</div>
      <div v-if='ExtraDays.length > 0' class = 'Button Delete' @click='ExtraDays.pop()' style='font-size: 1.3rem; display: flex; flex-direction: column; align-items: center'>Delete extra day</div>
      <div v-for='(rest, y) in ExtraDays' class='WeekDay' :key='y+"y"'>
        <div v-if='ExtraDays[y][0]'>Day: {{ExtraDays[y][0].toLocaleString('en-US', options)}}</div>
        <div v-else>Choose the day: </div>
        <DatePicker v-model="ExtraDays[y][0]"></DatePicker>
        <div>Choose the time range:</div>
        <DatePicker v-model="ExtraDays[y][1]" type='time' format= "HH:mm" range></DatePicker>
      </div>

      <hr style='width: 100%; box-shadow: 0 0 3px rgb(0,0,0)'>
      <div class="Button success" style='font-size: 1.3rem;' @click='CalcTime'>Compute the working time</div>
    </div>
  </div>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
export default {
  name: "Home",
  components: {
    DatePicker
  },
  data(){
    return{
      time: null,
      WeekDays: [
        {
          name: 'Sunday',
          title: '',
          rests: [],
          IsTime: false
        },
        {
          name: 'Monday',
          title: '',
          workingHours: [[8, 30], [19, 30]],
          rests: [
            [
              [13, 0], [14, 30]
            ]
          ],
          rests: [],
          IsTime: false
        },
        {
          name: 'Tuesday',
          title: '',
          workingHours: [[8, 30], [19, 30]],
          rests: [
            [
              [13, 0], [14, 30]
            ]
          ],
          rests: [],
          IsTime: false
        },
        {
          name: 'Wednesday',
          title: '',
          workingHours: [[8, 30], [19, 30]],
          rests: [
            [
              [13, 0], [14, 30]
            ]
          ],
          rests: [],
          IsTime: false
        },
        {
          name: 'Thursday',
          title: '',
          workingHours: [[8, 30], [19, 30]],
          rests: [
            [
              [13, 0], [14, 30]
            ]
          ],
          rests: [],
          IsTime: false
        },
        {
          name: 'Friday',
          title: '',
          workingHours: [[8, 30], [19, 30]],
          rests: [
            [
              [13, 0], [14, 30]
            ]
          ],
          rests: [],
          IsTime: false
        },
        {
          name: 'Saturday',
          title: '',
          rests: [],
          IsTime: false
        }
      ],
      InnerArray: [],
      Holidays: [],
      ExtraDays: [],
      options: { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    }
  },
  methods:{
    findStartingTime(){z
      let weekDays = this.WeekDays
      let actualTime = this.InnerArray[0]
      let dayOfWeek = actualTime.getDay()
      if (weekDays[dayOfWeek].title == 'rest') return this.checkStartingDay(weekDays, dayOfWeek)
      if (this.checkStartingTime(actualTime, dayOfWeek, weekDays)) return this.checkStartingTime(actualTime, dayOfWeek, weekDays)
      for(let i = 0; i < weekDays[dayOfWeek].rests.length; i++){
        let answer = this.checkRest(actualTime, weekDays, dayOfWeek, i)
        if (answer) return answer
      }
      return actualTime
    },
    checkHoliday(date){
      let a = 1
      this.Holidays.forEach( el => {
        if (el.getDate() == date.getDate() && el.getMonth() == date.getMonth() && el.getFullYear() == date.getFullYear()) {
          a = 0
        } 
      })
      switch(a){
        case(0):
          return false
        case(1):
          return true
      }
    },
    accEndingDay() {
      let acc = 0
      let StartingTime = this.InnerArray[1]
      let Day = StartingTime.getDay()
      if (this.WeekDays[Day].title != 'rest' && this.checkHoliday(StartingTime)){
        if (this.WeekDays[Day].workingHours[1][0] < StartingTime.getHours() ||
          (this.WeekDays[Day].workingHours[1][0] == StartingTime.getHours() &&
          this.WeekDays[Day].workingHours[1][1] < StartingTime.getMinutes()))
          {
            StartingTime = new Date(StartingTime.getFullYear(), StartingTime.getMonth(), StartingTime.getDate(), this.WeekDays[Day].workingHours[1][0], this.WeekDays[Day].workingHours[1][1])
          }
        if (this.WeekDays[Day].workingHours[0][0] > StartingTime.getHours() ||
          (this.WeekDays[Day].workingHours[0][0] == StartingTime.getHours() &&
          this.WeekDays[Day].workingHours[0][1] > StartingTime.getMinutes()))
          {
            StartingTime = new Date(StartingTime.getFullYear(), StartingTime.getMonth(), StartingTime.getDate(), this.WeekDays[Day].workingHours[0][0], this.WeekDays[Day].workingHours[0][1])
          }
        for(let i = 0; i < this.WeekDays[Day].rests.length; i++) {
          if (this.WeekDays[Day].rests[i][1][0] < StartingTime.getHours() ||
          (this.WeekDays[Day].rests[i][1][0] == StartingTime.getHours() &&
          this.WeekDays[Day].rests[i][1][1] < StartingTime.getMinutes()))
          {
            acc = acc + (StartingTime.getHours() - this.WeekDays[Day].rests[i][1][0]) * 60 + (StartingTime.getMinutes() - this.WeekDays[Day].rests[i][1][1])
            StartingTime = new Date(StartingTime.getFullYear(), StartingTime.getMonth(), StartingTime.getDate(), this.WeekDays[Day].rests[i][0][0], this.WeekDays[Day].rests[i][0][1])
          }
        }
        acc = acc + (StartingTime.getHours() - this.WeekDays[Day].workingHours[0][0]) * 60 - (StartingTime.getMinutes() - this.WeekDays[Day].workingHours[0][1])
      }
      return acc
    },
    addDayTime(acc, Day, CurrentDay){
      if (this.WeekDays[Day].title != 'rest' && this.checkHoliday(CurrentDay)){
        let StartingTime = new Date(2000,0,0,this.WeekDays[Day].workingHours[0][0],this.WeekDays[Day].workingHours[0][1])
        for(let i = 0; i < this.WeekDays[Day].rests.length; i++) {
            acc = acc + (this.WeekDays[Day].rests[i][0][0] - StartingTime.getHours()) * 60 + (this.WeekDays[Day].rests[i][0][1] - StartingTime.getMinutes())
            StartingTime = new Date(StartingTime.getFullYear(), StartingTime.getMonth(), StartingTime.getDate(), this.WeekDays[Day].rests[i][1][0], this.WeekDays[Day].rests[i][1][1])
        }
        acc = acc + (this.WeekDays[Day].workingHours[1][0] - StartingTime.getHours()) * 60 + (this.WeekDays[Day].workingHours[1][1] - StartingTime.getMinutes())
      }
      return acc
    },
    checkWeekDay(dayId){
      if (dayId == 6){
        return 0
      } else {
        return dayId + 1
      }
    },
    accStartingDay(Day, startingTime){
      let acc = 0
      let StartingTime = startingTime
      if(this.checkHoliday(StartingTime)){
        for(let i = 0; i < this.WeekDays[Day].rests.length; i++) {
          if (this.WeekDays[Day].rests[i][0][0] > StartingTime.getHours() ||
          (this.WeekDays[Day].rests[i][0][0] == StartingTime.getHours() &&
          this.WeekDays[Day].rests[i][0][1] > StartingTime.getMinutes()))
          {
            acc = acc + (this.WeekDays[Day].rests[i][0][0] - StartingTime.getHours()) * 60 + (this.WeekDays[Day].rests[i][0][1] - StartingTime.getMinutes())
            StartingTime = new Date(StartingTime.getFullYear(), StartingTime.getMonth(), StartingTime.getDate(), this.WeekDays[Day].rests[i][1][0], this.WeekDays[Day].rests[i][1][1])
          }
        }
      }
      acc = acc + (this.WeekDays[Day].workingHours[1][0] - StartingTime.getHours()) * 60 + (this.WeekDays[Day].workingHours[1][1] - StartingTime.getMinutes())
      return acc
    },
    checkStartingDay(weekDays, dayOfWeek){
      let actualTime = this.InnerArray[0]
      let acc = 0
      while (weekDays[dayOfWeek].title == 'rest'){
        dayOfWeek = this.checkWeekDay(dayOfWeek)
        acc++
      }
        return new Date(actualTime.getFullYear(), actualTime.getMonth(), actualTime.getDate() + acc, weekDays[dayOfWeek].workingHours[0][0], weekDays[dayOfWeek].workingHours[0][1])
    },
    checkStartingTime(actualTime, dayOfWeek, weekDays){
      if(weekDays[dayOfWeek].workingHours[0][0] > actualTime.getHours() ||
         (weekDays[dayOfWeek].workingHours[0][0] == actualTime.getHours() &&
          weekDays[dayOfWeek].workingHours[0][1] > actualTime.getMinutes())
      ) {
        return new Date(actualTime.getFullYear(), actualTime.getMonth(), actualTime.getDate(), weekDays[dayOfWeek].workingHours[0][0], weekDays[dayOfWeek].workingHours[0][1])
      }

      if(weekDays[dayOfWeek].workingHours[1][0] < actualTime.getHours() ||
         (weekDays[dayOfWeek].workingHours[1][0] == actualTime.getHours() &&
          weekDays[dayOfWeek].workingHours[1][1] < actualTime.getMinutes())
      ) {
        let acc = 1
        while (weekDays[this.checkWeekDay(dayOfWeek)].title == 'rest'){
          dayOfWeek = this.checkWeekDay(dayOfWeek)
          acc++
        }
        return new Date(actualTime.getFullYear(), actualTime.getMonth(), actualTime.getDate() + acc, weekDays[dayOfWeek + 1].workingHours[0][0], weekDays[dayOfWeek + 1].workingHours[0][1])
      }

      return false
    },
    checkRest(actualTime, weekDays, dayOfWeek, i){
      if ((weekDays[dayOfWeek].rests[i][0][0] < actualTime.getHours() ||
        (weekDays[dayOfWeek].rests[i][0][0] == actualTime.getHours() &&
          weekDays[dayOfWeek].rests[i][0][1] < actualTime.getMinutes())) &&
        (weekDays[dayOfWeek].rests[i][1][0] > actualTime.getHours() ||
        (weekDays[dayOfWeek].rests[i][1][0] == actualTime.getHours() &&
          weekDays[dayOfWeek].rests[i][1][1] > actualTime.getMinutes()))
      )
      {
        return weekDays[dayOfWeek].rests[i][1]
      } else {
        return false
      }
    },
    CalcTime(){
      this.InnerArray = this.time
      for(let i = 0; i < this.WeekDays.length; i++){
        for (let index = 0; index < this.WeekDays[i]?.rests?.length; index++) {
          this.WeekDays[i].rests[index] = [[this.WeekDays[i]?.rests[index]?.[0]?.getHours(),this.WeekDays[i]?.rests[index]?.[0]?.getMinutes()],[this.WeekDays[i]?.rests[index]?.[1]?.getHours(),this.WeekDays[i]?.rests[index]?.[1]?.getMinutes()]]
        }
        this.WeekDays[i] = {
          name: this.WeekDays[i].name,
          title: this.WeekDays[i].IsTime ? 'rest' : 'work',
          workingHours: [[this.WeekDays[i]?.time?.[0]?.getHours(),this.WeekDays[i]?.time?.[0]?.getMinutes()],[this.WeekDays[i]?.time?.[1]?.getHours(),this.WeekDays[i]?.time?.[1]?.getMinutes()]],
          rests: this.WeekDays[i].rests
        }
      }
      this.finalCalc()
    },
    finalCalc(){
      let acc = 0
      let StartingTime = this.findStartingTime()
      if (StartingTime.getDate() == this.InnerArray[0].getDate()) {
        acc = this.accStartingDay(StartingTime.getDay(), StartingTime)
        StartingTime = new Date(StartingTime.getFullYear(), StartingTime.getMonth(), StartingTime.getDate() + 1, 0, 0)
      }
      let DaysAmount = this.InnerArray[1].getDate() - StartingTime.getDate()
      let Day = StartingTime.getDay()
      let CurrentDay = StartingTime
      for (let i = 0; i < DaysAmount; i++) {
        acc = this.addDayTime(acc, Day, CurrentDay)
        Day = this.checkWeekDay(Day)
        CurrentDay = new Date(StartingTime.getFullYear(), StartingTime.getMonth(), StartingTime.getDate() + 1, 0, 0)
      }

      acc = acc + this.accEndingDay()

      console.log(acc);
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
}
.MainBox{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.MainBox * {
  margin: 5px;
}
.WeekDay{
  box-shadow: 0 0 5px rgb(158 132 132);
  width: 340px;
}
.Week{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.Button{
  padding: 5px 10px 5px 10px;
  background: rgba(158,132,132,0.2);
  border-radius: 5px;
  cursor: pointer;
}
.DayRests{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.Delete{
  background-color: rgb(255, 196, 196);
}
.success{
  background-color: rgb(138, 255, 148);
  margin-bottom: 30px;
}
</style>