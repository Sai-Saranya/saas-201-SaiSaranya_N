class AddDepartmentAndSectionToStudent < ActiveRecord::Migration[6.0]
  def change
    add_column :students , :department_id, :integer
    add_column :students , :section_id, :integer
  end
end
