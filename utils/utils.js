class Utils {
    static downloadJson(json) {
        const readable_date = (new Date()).toLocaleDateString();
        const filename = `virtualboard_${readable_date}.json`;
        const data = JSON.stringify(json);
        const blob = new Blob([data], { type: 'text/json' });
        const a = document.createElement('a');
        a.download = filename;
        a.href = window.URL.createObjectURL(blob);
        a.click();
    }
}

export default Utils;
