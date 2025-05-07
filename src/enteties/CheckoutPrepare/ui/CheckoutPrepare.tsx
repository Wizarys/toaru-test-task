const CheckoutPrepare = () => {
  return (
    <div className="flex justify-between max-w-2xl p-5">
      <div className="delivery-info">
        <h3>Доставка</h3>
        <p className="font-bold">Когда доставить</p>
        <div className="flex">
          <span>Выберите дату</span>
          <span>Выберите время</span>
        </div>
        <p className="font-bold">Куда доставить</p>
        <div className="rounded-full p-2 border border-[#F0F4FB]">
          Выберите адрес доставки
        </div>
        <p className="font-bold">Имя</p>
        <input
          type="text"
          className="rounded-full p-2 border border-[#F0F4FB]"
        />
        <p className="font-bold">Телефон</p>
        <input
          type="text"
          className="rounded-full p-2 border border-[#F0F4FB]"
        />
      </div>
      <div className="delivery-summary">
        <div className="bg-[#F0F4FB] rounded-[20px] p-5">
          <div className="flex justify-between">
            <p>Стоимость товаров:</p>
            <span>200 584₽</span>
          </div>
          <div className="flex justify-between">
            <p>Стоимость доставки:</p>
            <span>200 584₽</span>
          </div>
          <div className="flex justify-between">
            <p className="text-lg">Итого</p>
            <span className="font-bold">200 584₽</span>
          </div>
        </div>
        <button className="text-center bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full w-full">
          Сделать заказ
        </button>
      </div>
    </div>
  );
};

export default CheckoutPrepare;
