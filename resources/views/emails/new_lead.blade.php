<!DOCTYPE html>
<html>
<head>
    <title>New Lead Submission</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { padding: 20px; max-width: 600px; margin: auto; border: 1px solid #eee; border-radius: 8px; }
        .header { background: #0f172a; color: white; padding: 15px; border-radius: 8px 8px 0 0; text-align: center; }
        .content { padding: 20px; background: #f8fafc; }
        .item { margin-bottom: 10px; }
        .label { font-weight: bold; color: #475569; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>New Contact Request</h2>
        </div>
        <div class="content">
            <p>You have received a new lead from the VMAKITEC website:</p>
            
            <div class="item">
                <span class="label">Name:</span> {{ $lead->name }}
            </div>
            <div class="item">
                <span class="label">Email:</span> <a href="mailto:{{ $lead->email }}">{{ $lead->email }}</a>
            </div>
            <div class="item">
                <span class="label">Phone:</span> <a href="tel:{{ $lead->phone }}">{{ $lead->phone }}</a>
            </div>
            <div class="item">
                <span class="label">Service Required:</span> {{ $lead->service }}
            </div>
            <div class="item">
                <span class="label">Budget:</span> {{ $lead->budget ?? 'Not specified' }}
            </div>
            <div class="item">
                <span class="label">Description:</span>
                <p style="background: white; padding: 10px; border-left: 4px solid #3b82f6; margin-top: 5px;">{{ $lead->description }}</p>
            </div>
        </div>
    </div>
</body>
</html>
