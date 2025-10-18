import Card from "@/components/Card"
import Button from '@/components/Button'

const Landing: React.FC =  () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className=" text-xl font-extralight">Landing Page</h1>
  {/* example buttons are shown in the sections below */}
      <Card />

      <section>
        <h2 className="text-lg font-semibold">Sizes</h2>
        <div className="flex gap-3 mt-3">
          <Button title="Small" size="small" styles="bg-blue-600 text-white rounded-sm" />
          <Button title="Medium" size="medium" styles="bg-green-600 text-white rounded-md" />
          <Button title="Large" size="large" styles="bg-purple-600 text-white rounded-full" />
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold">Shapes</h2>
        <div className="flex gap-3 mt-3">
          <Button title="Rounded-sm" size="medium" styles="bg-slate-700 text-white rounded-sm" />
          <Button title="Rounded-md" size="medium" styles="bg-slate-700 text-white rounded-md" />
          <Button title="Rounded-full" size="medium" styles="bg-slate-700 text-white rounded-full" />
        </div>
      </section>
    </div>
  )
}

export default Landing