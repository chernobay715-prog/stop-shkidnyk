const requestForm = document.querySelector('#contact-request form');
const objectType = requestForm.elements.namedItem("Тип об'єкта");
const requestCity = requestForm.elements.namedItem('Населений пункт');
const requestArea = requestForm.elements.namedItem('Площа об’єкта, м²');
const requestService = requestForm.elements.namedItem('Послуга');
const landingService = new URLSearchParams(location.search).get('service');
const businessType = 'Бізнес / підприємство';

if (landingService === 'pest-control-vinnytsia') {
  objectType.value = businessType;
  requestCity.value = 'Вінниця';
  requestService.value = 'Пест-контроль для бізнесу у Вінниці';
} else if (landingService === 'tarhany-sumy') {
  requestService.value = 'Знищення тарганів у Сумах';
}
requestService.disabled = !requestService.value;

function updateBusinessFields() {
  const businessRequest = objectType.value === businessType;
  for (const field of [requestCity, requestArea]) {
    field.hidden = !businessRequest;
    field.disabled = !businessRequest;
  }
}

objectType.addEventListener('change', updateBusinessFields);
updateBusinessFields();
