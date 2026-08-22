import { DeleteRequestForm } from '../components/DeleteRequestForm'
import { PageLayout } from '../components/PageLayout'

export function DeleteMyData() {
  return (
    <PageLayout title="Delete My Data">
      <DeleteRequestForm
        description="Request permanent deletion of your personal data associated with your Ruchi account. This includes cooking sessions, recipes, preferences, and other stored information."
        warning="This action cannot be undone. Some data may be retained where required by law or for legitimate business purposes (such as fraud prevention)."
        actionLabel="Delete my data"
      />
    </PageLayout>
  )
}
