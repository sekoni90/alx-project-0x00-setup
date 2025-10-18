import Card from "@/components/Card"
import Button from '@/components/Button'

const Landing: React.FC =  () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />

      <section>
        <h2 className="text-lg font-semibold">Sizes</h2>
        <div className="flex gap-3 mt-3">
          <Button title="rounded-sm" size="rounded-sm" styles="bg-blue-600b text-white rounded-sm" />
          <Button title="rounded-md" size="rounded-md" styles="bg-green-600 text-white rounded-md" />
          <Button title="rounded-lg" size="rounded-lg" styles="bg-purple-600 text-white rounded-lg" />
          <Button title="rounded-full" size="rounded-full" styles="bg-red-600 text-white rounded-full" />
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold">Shapes</h2>
        <div className="flex gap-3 mt-3">
          <Button title="Rounded-sm" size="rounded-sm" styles="bg-slate-700 text-white rounded-sm" />
          <Button title="Rounded-md" size="rounded-md" styles="bg-slate-700 text-white rounded-md" />
          <Button title="Rounded-full" size="rounded-full" styles="bg-slate-700 text-white rounded-full" />
        </div>
      </section>
    </div>
  )
}

export default Landing