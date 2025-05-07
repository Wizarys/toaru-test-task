export default async function Categories() {
  const data = await fetch("*Тут api эндпоинт который меня попросили удалить*");
  const categories = await data.json();

  return (
    <div className={""}>
      <div className="flex justify-between">
        <p>Категории товаров</p>
        <p>Настройки</p>
      </div>
      <div className="flex">
        {categories.map((category) => (
          <div key={category.id} className={""}>
            {category.name}
          </div>
        ))}
      </div>
    </div>
  );
}
