window.onload = () => {
    function setCurrentJobDuration() {
        const currentJobStart = moment([2014, 9]);
        const today = moment();

        const currentJobDuration = moment.duration(today.diff(currentJobStart));
        const years = currentJobDuration.years();
        const months = currentJobDuration.months();

        const monthPlural = months > 1 ? 'en' : '';
        const monthsText = months > 0 ? `en ${months} maand${monthPlural}` : '';

        const currentJobDurationText = `${years} jaar ${monthsText}`;
        document.getElementById('currentJobDuration').innerText = currentJobDurationText;
    }

    setCurrentJobDuration();
};