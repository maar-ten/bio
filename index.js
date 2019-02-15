function createYearsMonthsText(duration) {
    const years = duration.years();
    const yearsText = `${years} jaar`;

    const months = duration.months();
    const monthPlural = months > 1 ? 'en' : '';
    const monthsText = months > 0 ? `en ${months} maand${monthPlural}` : '';

    return `${yearsText} ${monthsText}`;
}

function setCurrentJobDuration() {
    const currentJobStart = moment([2014, 9]);
    const currentJobDuration = moment.duration(moment().diff(currentJobStart));
    document.getElementById('currentJobDuration').innerText = createYearsMonthsText(currentJobDuration);
}

window.onload = () => {
    setCurrentJobDuration();
};