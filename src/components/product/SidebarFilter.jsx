import React from 'react'

const defaultGroups = [
  {
    title: 'SPECIAL OCCASIONS',
    items: ['Birthday', 'Anniversary', 'Gratitude'],
    active: null,
  },
  {
    title: 'FLOWER CATEGORIES',
    items: ['Roses', 'Orchids', 'Sunflowers'],
    active: null,
  },
]

function SidebarFilter({
  groups = defaultGroups,
  value = 150,
  min = 40,
  max = 250,
  onChange,
  minLabel = '$40',
  maxLabel = '$250',
}) {
  return (
    <aside className="space-y-8 rounded-[1.75rem] bg-white p-6 shadow-[0_0_32px_rgba(27,28,26,0.06)] max-h-[calc(100vh-10rem)] overflow-y-auto">
      <div className="space-y-6">
        {groups.map((group) => (
          <div key={group.title} className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2b6954]">
              {group.title}
            </div>
            <ul className="space-y-3">
              {group.items.map((item) => {
                const isActive = item === group.active
                return (
                  <li
                    key={item}
                    className={`flex items-center gap-3 text-sm ${isActive ? 'font-semibold text-[#1b1c1a]' : 'text-[#566342]'}`}
                  >
                    {isActive && <span className="h-2.5 w-2.5 rounded-full bg-[#2b6954]" />}
                    <span>{item}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-[#715953]">
          <span>PRICE RANGE</span>
          <span>${value}</span>
        </div>
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={onChange}
          className="w-full accent-[#2b6954]"
        />
        <div className="flex justify-between text-sm text-[#566342]">
          <span>{minLabel}</span>
          <span>{maxLabel}</span>
        </div>
      </div>
    </aside>
  )
}

export default SidebarFilter
