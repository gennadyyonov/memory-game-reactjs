export default class ArrayUtils {

    static shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let index = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[index];
            array[index] = temp;
        }
    };
}