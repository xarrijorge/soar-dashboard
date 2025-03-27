import ImageUploader from './ImageUploader'
import ProfileForm from './ProfileForm'

export default function EditProfileSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-6 px-6">
      {/* Left: Image upload (1 column) */}
      <div className="flex justify-center md:justify-start">
        <ImageUploader />
      </div>

      {/* Right: Form spans 3 columns */}
      <div className="md:col-span-5">
        <ProfileForm />
      </div>
    </div>
  )
}
