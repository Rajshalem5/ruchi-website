import { DeleteRequestForm } from '../components/DeleteRequestForm'
import { PageLayout } from '../components/PageLayout'

export function DeleteMyAccount() {
  return (
    <PageLayout title="Delete My Account">
      <DeleteRequestForm
        description="Permanently delete your Ruchi account and all associated data. You will lose access to the service and will need to create a new account if you wish to return."
        warning="Deleting your account is permanent. All your data, settings, and conversation history will be removed and cannot be recovered."
        actionLabel="Delete my account"
      />
    </PageLayout>
  )
}
