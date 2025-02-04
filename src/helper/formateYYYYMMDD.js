export default function formateYYYYMMDD(datetime) {
    const newDateTime = new Date(datetime);

    const year = newDateTime.getFullYear().toString();
    const month = (newDateTime.getMonth() + 1).toString().padStart(2, '0');
    const day = newDateTime.getDate().toString().padStart(2,"0");

    return `${year}-${month}-${day}`
}