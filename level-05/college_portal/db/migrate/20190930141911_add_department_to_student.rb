class AddDepartmentToStudent < ActiveRecord::Migration[6.0]
  def change
    add_column :students, :department_id, :integer
  end
end
