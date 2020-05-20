export function search(size, crust, array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i].size_id === size && array[i].crust_id === crust) {
            return array[i];
        }
    }
}