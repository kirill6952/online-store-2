export function formatterCurrency(number) {
    const formattedCurrency = number.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    return formattedCurrency.replace('US$', '$'); // Replace 'US$' with '$'
}