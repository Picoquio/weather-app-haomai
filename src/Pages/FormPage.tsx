import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import { IWeatherArguments } from "../api/interfaces";
import { GetWeather } from "../api/openWeatherMap";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { WeatherContext } from "../context/WeatherContext";

export const FormPage = () => {
  const { weather, setWeather } = useContext(WeatherContext);

  const [loadingRequest, setLoadingRequest] = useState<boolean>(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<IWeatherArguments>({
    mode: "onChange",  // This ensures that validation is checked on each input change
  })

  const onSubmit: SubmitHandler<IWeatherArguments> = async (data) => {
    setLoadingRequest(true);
    const weatherResponse = await GetWeather(data);
    setLoadingRequest(false);

    if (weatherResponse.hasError) {
      notifyFetchError();
      return;
    }

    setWeather(weatherResponse.data)
    navigateToWeatherPage();
  }

  const notifyFetchError = () => {
    return toast.error('Error while fetching weather data')
  }

  const navigateToWeatherPage = () => {
    navigate('/weather-details');
  };

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='w-full max-w-lg px-10 py-8 mx-auto bg-white rounded-lg shadow-xl'>
        <div className='max-w-md mx-auto space-y-6'>

          <h2 className="text-2xl font-bold">Weather finder</h2>

          <div className='text-base leading-3'>
            <p className=' text-gray-700'>Please enter latitude and longitude.</p>
          </div>


          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="pb-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label htmlFor="latitude" className="block text-sm font-medium leading-6 text-gray-900">Latitude</label>
                  <div className="mt-2">
                    <input
                      {...register("latitude", { required: true, max: 90, min: -90 })}
                      type="number"
                      id="latitude"
                      step="any"
                      className={`${errors.latitude ? "errorInput" : "normalInput"}`} 
                      placeholder="E.g. 42.9860431"/>
                    {errors.latitude?.type === 'max' && <p className="text-red-600">Max value: 90</p>}
                    {errors.latitude?.type === 'min' && <p className="text-red-600">Min value: -90</p>}
                    {errors.latitude?.type === 'required' && <p className="text-red-600">Latitude is required</p>}
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label htmlFor="longitude" className="block text-sm font-medium leading-6 text-gray-900">Longitude</label>
                  <div className="mt-2">
                    <input
                      {...register("longitude", { required: true, max: 180, min: -180 })}
                      type="number"
                      id="longitude"
                      step="any"
                      className={`${errors.longitude ? "errorInput" : "normalInput"}`}
                      placeholder="E.g. -1.8067988" />
                    {errors.longitude?.type === 'max' && <p className="text-red-600">Max value: 180</p>}
                    {errors.longitude?.type === 'min' && <p className="text-red-600">Min value: -180</p>}
                    {errors.longitude?.type === 'required' && <p className="text-red-600">Longitude is required</p>}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-2 align-middle content-center">
              <button
                disabled={!isValid || loadingRequest}
                type="submit"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-stone-800 text-white shadow hover:bg-primary/90 h-9 px-4 py-2">Find Weather!</button>
              {loadingRequest && <LoadingSpinner />}

            </div>
          </form>

          {/* Fin form */}

        </div>
      </div>
      <Toaster />
    </div>
  )
}
