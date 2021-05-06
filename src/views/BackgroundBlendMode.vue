<template>
  <div class="home">
    <div class="MainBox"></div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data(){
    return{
      WeekDays: [
        {
          name: 'sunday',
          title: 'rest'
        },
        {
          name: 'monday',
          title: 'work',
          workingHours: [[8, 30], [19, 30]],
          rests: [
            [
              [13, 0], [14, 30]
            ]
          ]
        },
        {
          name: 'tuesday',
          title: 'work',
          workingHours: [[8, 30], [19, 30]],
          rests: [
            [
              [13, 0], [14, 30]
            ]
          ]
        },
        {
          name: 'wednesday',
          title: 'work',
          workingHours: [[8, 30], [19, 30]],
          rests: [
            [
              [13, 0], [14, 30]
            ]
          ]
        },
        {
          name: 'thursday',
          title: 'work',
          workingHours: [[8, 30], [19, 30]],
          rests: [
            [
              [13, 0], [14, 30]
            ]
          ]
        },
        {
          name: 'friday',
          title: 'work',
          workingHours: [[8, 30], [19, 30]],
          rests: [
            [
              [13, 0], [14, 30]
            ]
          ]
        },
        {
          name: 'saturday',
          title: 'rest'
        }
      ],
      InnerArray: [
        new Date(2021, 4, 5, 20, 30),
        new Date(2021, 4, 11, 7, 30)
      ],
      Holidays: [
        new Date(2021, 4, 6)
      ]
    }
  },
  mounted() {
    let acc = 0
    let StartingTime = this.findStartingTime()
    console.log(StartingTime);
    if (StartingTime.getDate() == this.InnerArray[0].getDate()) {
      acc = this.accStartingDay(StartingTime.getDay(), StartingTime)
      StartingTime = new Date(StartingTime.getFullYear(), StartingTime.getMonth(), StartingTime.getDate() + 1, 0, 0)
    }
    console.log(acc)
    let DaysAmount = this.InnerArray[1].getDate() - StartingTime.getDate()
    console.log(DaysAmount)
    let Day = StartingTime.getDay()
    let CurrentDay = StartingTime.getDate()
    for (let i = 0; i < DaysAmount; i++) {
      acc = this.addDayTime(acc, Day, CurrentDay)
      Day = this.checkWeekDay(Day)
      CurrentDay = new Date(StartingTime.getFullYear(), StartingTime.getMonth(), StartingTime.getDate() + 1, 0, 0).getDate()
    }

    console.log(acc);

    acc = acc + this.accEndingDay()

    console.log(acc);
  },
  methods:{
    findStartingTime(){
      let weekDays = this.WeekDays
      let actualTime = this.InnerArray[0]
      let dayOfWeek = actualTime.getDay()
      console.log(dayOfWeek);
      if (weekDays[dayOfWeek].title == 'rest') {
        console.log('rest day');
        return this.checkStartingDay(weekDays, dayOfWeek)
      }
      if (this.checkStartingTime(actualTime, dayOfWeek, weekDays)) {
        console.log('start time problem');
        return this.checkStartingTime(actualTime, dayOfWeek, weekDays)
      }
      for(let i = 0; i < weekDays[dayOfWeek].rests.length; i++){
        let answer = this.checkRest(actualTime, weekDays, dayOfWeek, i)
        if (answer) {
          return answer
        }
      }
      return actualTime
    },
    checkHoliday(date){
      let a = 1
      this.Holidays.forEach( el => {
        if (el.getDate() == date) {
          console.log(el.getDate());
          console.log(date,'mmm');
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
      if (this.WeekDays[Day].title != 'rest' && this.checkHoliday(StartingTime.getDate())){
        if (this.WeekDays[Day].workingHours[1][0] < StartingTime.getHours() ||
          (this.WeekDays[Day].workingHours[1][0] == StartingTime.getHours() &&
          this.WeekDays[Day].workingHours[1][1] < StartingTime.getMinutes()))
          {
            StartingTime = new Date(StartingTime.getFullYear(), StartingTime.getMonth(), StartingTime.getDate(), this.WeekDays[Day].workingHours[1][0], this.WeekDays[Day].workingHours[1][1])
            console.log(StartingTime, 'sdsd');
          }
        if (this.WeekDays[Day].workingHours[0][0] > StartingTime.getHours() ||
          (this.WeekDays[Day].workingHours[0][0] == StartingTime.getHours() &&
          this.WeekDays[Day].workingHours[0][1] > StartingTime.getMinutes()))
          {
            StartingTime = new Date(StartingTime.getFullYear(), StartingTime.getMonth(), StartingTime.getDate(), this.WeekDays[Day].workingHours[0][0], this.WeekDays[Day].workingHours[0][1])
            console.log(StartingTime, 'sdsd');
          }
        for(let i = 0; i < this.WeekDays[Day].rests.length; i++) {
          if (this.WeekDays[Day].rests[i][1][0] < StartingTime.getHours() ||
          (this.WeekDays[Day].rests[i][1][0] == StartingTime.getHours() &&
          this.WeekDays[Day].rests[i][1][1] < StartingTime.getMinutes()))
          {
            acc = acc + (StartingTime.getHours() - this.WeekDays[Day].rests[i][1][0]) * 60 + (StartingTime.getMinutes() - this.WeekDays[Day].rests[i][1][1])
            console.log(this.WeekDays[Day].rests[i][0][1],'kkkk');
            StartingTime = new Date(StartingTime.getFullYear(), StartingTime.getMonth(), StartingTime.getDate(), this.WeekDays[Day].rests[i][0][0], this.WeekDays[Day].rests[i][0][1])
          }
        }
        console.log(acc);
        acc = acc + (StartingTime.getHours() - this.WeekDays[Day].workingHours[0][0]) * 60 - (StartingTime.getMinutes() - this.WeekDays[Day].workingHours[0][1])
      }
      return acc
    },
    addDayTime(acc, Day, CurrentDay){
      console.log(CurrentDay,'sss');
      console.log(acc,'s');
      console.log(this.checkHoliday(CurrentDay));
      if (this.WeekDays[Day].title != 'rest' && this.checkHoliday(CurrentDay)){
        let StartingTime = new Date(2000,0,0,this.WeekDays[Day].workingHours[0][0],this.WeekDays[Day].workingHours[0][1])
        for(let i = 0; i < this.WeekDays[Day].rests.length; i++) {
            acc = acc + (this.WeekDays[Day].rests[i][0][0] - StartingTime.getHours()) * 60 + (this.WeekDays[Day].rests[i][0][1] - StartingTime.getMinutes())
            StartingTime = new Date(StartingTime.getFullYear(), StartingTime.getMonth(), StartingTime.getDate(), this.WeekDays[Day].rests[i][1][0], this.WeekDays[Day].rests[i][1][1])
        }
        acc = acc + (this.WeekDays[Day].workingHours[1][0] - StartingTime.getHours()) * 60 + (this.WeekDays[Day].workingHours[1][1] - StartingTime.getMinutes())
      }
      console.log(acc,'g');
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
      if(this.checkHoliday(StartingTime.getDate())){
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
      console.log(dayOfWeek);
      let acc = 0
      while (weekDays[dayOfWeek].title == 'rest'){
        dayOfWeek = this.checkWeekDay(dayOfWeek)
        console.log(dayOfWeek);
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
          console.log(dayOfWeek);
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
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>