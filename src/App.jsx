export default function App() {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center p-4">
      <div className="card w-96 bg-base-100 shadow-xl border border-base-300">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl font-bold text-primary">
            🚀 Meu App de Rotina
          </h2>
          <p className="text-base-content/70">
            Tailwind CSS e daisyUI funcionando com sucesso!
          </p>
          <div className="card-actions justify-end mt-4">
            <button className="btn btn-primary">Bora codar!</button>
          </div>
        </div>
      </div>
    </div>
  )
}