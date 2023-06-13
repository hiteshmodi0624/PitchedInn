const UploadImageLabel = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <label htmlFor="upload-img" className={`cursor-pointer ${className}`}>
      {children}
    </label>
  );
};
export default UploadImageLabel