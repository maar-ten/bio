function createYearsMonthsText(duration) {
    const total_months = duration.as('months');
    const years = Math.floor(total_months / 12);
    const yearsText = `${years} jaar`;

    const months = Math.round(total_months % 12);
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