function getDayOfTheWeek(dayWeek) {
    let dayWeekText;

    switch (dayWeek) {
        case 0:
            dayWeekText = 'Domingo';
            return dayWeekText;
        case 1:
            dayWeekText = 'Segunda-feira';
            return dayWeekText;
        case 2:
            dayWeekText = 'Terça-feira';
            return dayWeekText;
        case 3:
            dayWeekText = 'Quarta-feira';
            return dayWeekText;
        case 4:
            dayWeekText = 'Quinta-feira';
            return dayWeekText;
        case 5:
            dayWeekText = 'Sexta-feira';
            return dayWeekText;
        case 6:
            dayWeekText = 'Sábado';
            return dayWeekText;
        default:
            dayWeekText = '';
            return dayWeekText;
    }
}

const date = new Date('2000-05-22 00:00:00:');
const dayWeek = date.getDay();

const dayWeekText = getDayOfTheWeek(dayWeek);
console.log(dayWeekText);

