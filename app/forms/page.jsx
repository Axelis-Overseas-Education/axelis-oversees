import React from 'react'

const RegisterForm = () => {
  return (
    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div class="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
      <form class="mb-0 space-y-6" action="#" method="POST">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">Full Name</label>
          <div class="mt-1">
            <input className='w-full border-gray-300 rounded-lg shadow-sm' id="name" name="name" type="text" required class="" />
          </div>
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
          <div class="mt-1">
            <input className='w-full border-gray-300 rounded-lg shadow-sm' id="email" name="email" type="email" autocomplete="email" required class="" />
          </div>
        </div>

        <div>
          <label for="phone" class="block text-sm font-medium text-gray-700">Phone Number</label>
          <div class="mt-1">
            <input className='w-full border-gray-300 rounded-lg shadow-sm' class="appearance-none" id="phone" name="phone" type="number"  required />
          </div>
        </div>

        <div>
          <label for="education" class="block text-sm font-medium text-gray-700">Your highest education level</label>
          <div class="mt-1">
            <select className='w-full border-gray-300 rounded-lg shadow-sm' name="education" id="education" class="" required>
              <option value="">Please select</option>
              <option value="small">Right Out of School</option>
              <option value="medium">Undergraduate</option>
              <option value="large">Post Graduate</option>
              <option value="large">PHD</option>
            </select>
          </div>
        </div>
        <div>
          <label for="ielts_exam" class="block text-sm font-medium text-gray-700">Have you taken IELTS exam</label>
          <div class="mt-1">
            <select className='w-full border-gray-300 rounded-lg shadow-sm' name="ielts_exam" id="ielts_exam" class="" required>
              <option value="">Please select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>              
            </select>
          </div>
        </div>
        <div>
          <label for="course" class="block text-sm font-medium text-gray-700">What kind of course you are looking for?</label>
          <div class="mt-1">
            <input className='w-full border-gray-300 rounded-lg shadow-sm' id="course" name="course" type="text" required class="" />
          </div>
        </div>
        <div>
          <label for="country" class="block text-sm font-medium text-gray-700">Where would you like to fly?</label>
          <div class="mt-1">
            <input className='w-full border-gray-300 rounded-lg shadow-sm' id="country" name="country" type="text" required class="" />
          </div>
        </div>
        <div>
          <label for="start" class="block text-sm font-medium text-gray-700">When do you plan on starting your studies abroad? </label>
          <div class="mt-1">
            <input className='w-full border-gray-300 rounded-lg shadow-sm' id="start" name="start" type="text" required class="" />
          </div>
        </div>
        
        <div>
          <label for="ielts_exam" class="block text-sm font-medium text-gray-700">How do you plan to fund your studies?</label>
          <div class="mt-1">
            <select className='w-full border-gray-300 rounded-lg shadow-sm' name="ielts_exam" id="ielts_exam" class="" required>
              <option value="">Please select</option>
              <option value="Yes">Self- Funded</option>
              <option value="No">Partially Funded with Scholarship</option>              
              <option value="No">Student Loan</option>              
            </select>
          </div>
        </div>
        <div class="flex items-center">
          <input id="terms-and-privacy" name="terms-and-privacy" type="checkbox" class="" />
          <label for="terms-and-privacy" class="ml-2 block text-sm text-gray-900"
            >I agree to the
            <a href="#" class="text-indigo-600 hover:text-indigo-500">Terms</a>
            and
            <a href="#" class="text-indigo-600 hover:text-indigo-500">Privacy Policy</a>.
          </label>
        </div>
        {/* <!-- <div>
          <label for="subscribe" class="block text-sm font-medium text-gray-700">Would you like to receive email updates about relevant study abroad opportunities, scholarships, and events from Oversee Education Pvt Ltd?</label>
          <div class="mt-1">
            <select name="subscribe" id="subscribe" class="" required>
              <option value="">Please select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>              
            </select>
          </div>
        </div> --> */}
        <div>
          <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Register</button>
        </div>
      </form>
    </div>
  </div>

  )
}

export default RegisterForm
