const stats = [
    { id: 1, name: 'Satisfaction client', value: '100%' },
    { id: 2, name: 'Livraison 24/7', value: 'Disponible' },
    { id: 3, name: 'Nouveaux utilisateurs annuels', value: '46 000' },
]
  
  export default function State() {
    return (
      <div className="bg-white py-24 sm:py-32  rounded-2xl ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4  lg:border-l-8  lg:border-t-0 border-t-8  p-9 border-blue-700">
                <dt className="text-base leading-7 text-gray-600 ">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-blue-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  