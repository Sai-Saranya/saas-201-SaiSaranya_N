class AddDepartmentToSection < ActiveRecord::Migration[6.0]
  def change
    add_column :sections, :department_id, :integer
  end
end
